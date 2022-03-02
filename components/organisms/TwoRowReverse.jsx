import Image from "next/image"

export const TwoRowReverse = (props) => {
    return (
        <div className="flex justify-between justify-items-center">
            <div className="flex flex-col justify-center justify-items-center p-5">
                <h1 className="font-mono text-center text-4xl mb-3">{props.title}</h1>
                <p className="font-mono text-justify">{props.txt}</p>
            </div>
            <div className="p-5"><Image src={props.src} alt={props.alt} width={props.w} height={props.h} /></div>
        </div>
    )
}
