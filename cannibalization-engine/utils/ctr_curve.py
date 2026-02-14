CTR_CURVE = {
    1: 0.28,
    2: 0.15,
    3: 0.11,
    4: 0.08,
    5: 0.07,
    6: 0.05,
    7: 0.04,
    8: 0.03,
    9: 0.02,
    10: 0.02
}

def estimate_ctr(position):
    return CTR_CURVE.get(int(position), 0.01)
