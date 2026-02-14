def apply_recommendations(dashboard):

    for pair in dashboard["page_pairs"]:

        risk = pair["risk"]

        if risk > 0.80:
            pair["recommendation"] = "Merge"
        elif risk > 0.65:
            pair["recommendation"] = "Differentiate Content"
        else:
            pair["recommendation"] = "Monitor"

    return dashboard
