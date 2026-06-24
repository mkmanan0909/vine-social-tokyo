import asyncio
import logging
import os
import smtplib
from email.message import EmailMessage
from pathlib import Path

from fastapi import APIRouter, FastAPI, HTTPException
from pydantic import BaseModel, Field
from starlette.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).resolve().parent
_env_file = ROOT_DIR / ".env"
if _env_file.is_file():
    from dotenv import load_dotenv

    load_dotenv(_env_file)

logger = logging.getLogger(__name__)

app = FastAPI(title="Vine Social Tokyo API")
api_router = APIRouter(prefix="/api")


class ContactSubmissionCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    phone: str = Field(min_length=1, max_length=50)
    email: str = Field(min_length=3, max_length=320)
    message: str = Field(min_length=1, max_length=8000)


def _send_contact_email_sync(payload: ContactSubmissionCreate) -> None:
    to_addr = os.environ.get("CONTACT_TO_EMAIL", "ssvinesocial@gmail.com").strip()
    smtp_user = (os.environ.get("SMTP_USER") or "ssvinesocial@gmail.com").strip()
    smtp_pass = (os.environ.get("SMTP_PASSWORD") or "").strip()
    if not smtp_user or not smtp_pass:
        raise RuntimeError("SMTP_USER and SMTP_PASSWORD must be set to send mail.")

    host = os.environ.get("SMTP_HOST", "smtp.gmail.com").strip()
    port = int(os.environ.get("SMTP_PORT", "465"))

    msg = EmailMessage()
    msg["Subject"] = f"[Vine Social Tokyo] Message from {payload.name}"
    msg["From"] = smtp_user
    msg["To"] = to_addr
    msg["Reply-To"] = payload.email
    body = (
        f"Name: {payload.name}\n"
        f"Phone: {payload.phone}\n"
        f"Email: {payload.email}\n\n"
        f"Message:\n{payload.message}\n"
    )
    msg.set_content(body)

    with smtplib.SMTP_SSL(host, port, timeout=30) as smtp:
        smtp.login(smtp_user, smtp_pass)
        smtp.send_message(msg)


@api_router.post("/contact")
async def create_contact_submission(submission: ContactSubmissionCreate):
    try:
        await asyncio.to_thread(_send_contact_email_sync, submission)
    except RuntimeError as exc:
        logger.warning("Contact mail misconfigured: %s", exc)
        raise HTTPException(
            status_code=503,
            detail="Email is not configured on the server. Please try again later.",
        ) from exc
    except OSError as exc:
        logger.exception("SMTP failure")
        raise HTTPException(
            status_code=502,
            detail="Could not send email. Please try again later.",
        ) from exc

    return {"status": "sent", "message": "Thank you — your message was delivered."}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
