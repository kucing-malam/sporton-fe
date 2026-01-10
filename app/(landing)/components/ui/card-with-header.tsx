type TCardWithHeaderProps = {
    title: string;
    children: React.ReactNode;
}

const CardWithHeader = ({title, children}:TCardWithHeaderProps) => {
    return (
        <div className="bg-white">
            <div className="border-gray-200 p-5 py-4 border-b">
                <h1 className="font-bold text-lg">{title}</h1>
            </div>
            {children}
        </div>
    )
}

export default CardWithHeader;