import httpx

from app.config import OLLAMA_URL, MODEL


async def ask_ollama(prompt: str):

    payload = {
        "model": MODEL,
        "prompt": prompt,
        "stream": False
    }


    async with httpx.AsyncClient() as client:

        response = await client.post(
            f"{OLLAMA_URL}/api/generate",
            json=payload,
            timeout=120
        )


    data = response.json()

    return data["response"]