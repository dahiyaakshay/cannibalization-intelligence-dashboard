import re

def clean_query(q):
    q = q.lower()
    q = re.sub(r"[^a-z0-9\s]", "", q)
    return q.strip()
