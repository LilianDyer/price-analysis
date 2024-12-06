interface PriceRecord {
    date: string;
    securityId?: string;
    companyId: number;
    ticker?: string;
    isoCountryCode?: string;
    close: number;
}

export default PriceRecord;