import pandas as pd

def load_csv(file):
    df = pd.read_csv(file.file)
    required_cols = ["query", "page", "clicks", "impressions", "position"]
    for col in required_cols:
        if col not in df.columns:
            raise ValueError(f"Missing required column: {col}")
    return df
