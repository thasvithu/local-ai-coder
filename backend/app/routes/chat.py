from fastapi import APIRouter
from pydantic import BaseModel

from app.ollama import ask_ollama


router = APIRouter()


class ChatRequest(BaseModel):
    message: str



@router.post("/chat")
async def chat(
    request: ChatRequest
):

    answer = await ask_ollama(
        request.message
    )

    return {
        "response": answer
    }