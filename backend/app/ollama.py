import httpx

from app.config import OLLAMA_URL, MODEL


import time


async def ask_ollama(prompt: str):

    start = time.time()

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


    elapsed = time.time() - start

    print(
        f"⚡ Ollama response time: {elapsed:.2f}s"
    )


    return data["response"]