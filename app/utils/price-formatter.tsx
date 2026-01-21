const PriceFormatter = (price: number) => {
    const newFormat = Intl.NumberFormat("id-ID", {
            style: 'currency',
            currency: 'IDR',
            maximumSignificantDigits: 12
        }).format(price);
        
    return newFormat;
}

export default PriceFormatter;