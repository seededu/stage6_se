FROM python:3.11

COPY . /stage6_se

WORKDIR /stage6_se

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv
RUN uv venv
RUN uv pip install --no-cache-dir -r requirements.txt

ENTRYPOINT ["./entrypoint.sh"]

# Default action is 'build'
CMD ["build"]