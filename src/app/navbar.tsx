import Image from "next/image"

export default function Navbar() {
    return (
        <div className="grid grid-cols-4 h-20 w-full bg-gradient-to-b from-red-950 bg-red-700 text-white sticky">
            <div className="col-span-1 flex items-center justify-center overflow-hidden">
                <div>
                    <Image src="/kopcarqlogo.png" alt="Kopcarq Logo" width={200} height={200} className="max-h-full max-w-full" />
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-center font-bold hover:ease-in-out hover:bg-red-950 hover:rounded-b-2xl hover:border-solid hover:border-red-950 duration-300 hover:scale-110">NOSOTROS</div>
            <div className="col-span-1 flex items-center justify-center font-bold hover:ease-in-out hover:bg-red-950 hover:rounded-b-2xl hover:border-solid hover:border-red-950 duration-300 hover:scale-110">TRABAJOS</div>
            <div className="col-span-1 flex items-center justify-center font-bold hover:ease-in-out hover:bg-red-950 hover:rounded-b-2xl hover:border-solid hover:border-red-950 duration-300 hover:scale-110">CONTACTO</div>
        </div>
    )
}

