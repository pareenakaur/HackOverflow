import finnhub

finnhub_client = finnhub.Client(api_key="cjs718hr01qioniff400cjs718hr01qioniff40g")


a = finnhub_client.company_basic_financials('AAPL', 'all')


