FROM python:3.11

# Sphinx options documented here
# https://www.sphinx-doc.org/en/master/man/sphinx-build.html
#ARG SPHINXOPTS="-v"
#ENV SPHINXOPTS=${SPHINXOPTS}

COPY /src /src

WORKDIR /src

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv
RUN uv venv
RUN uv pip install --no-cache-dir -r requirements.txt

ENTRYPOINT ["./entrypoint.sh"]

# Default action is 'build'
CMD ["build"]