import Link from "next/link";

export default function AboutMe() {
    return (<div className="flex flex-col justify-around px-72 mt-5 text-xl">
        <div className="flex justify-center items-center h-[100px]"></div>
        <div className="flex flex-row justify-around">
            <div>
                <p>
                    Fabio Canavaro (Lisboa, 1990) uso o nome artistico, trashsure, nome resultado da junção da palavra inglesa trash(lixo) e sure(advém da palavra tesouro).
                </p>
            </div>
            <div>
            </div>
        </div>
        <br></br>
        <div className="flex flex-row justify-around">
            A minha juventude teve lugar entre as horas passadas no estúdio do meu avô constantino,
            que tinha uma paixão incessante por aguarelas e óleos e retratava paisagens e cenas típicas da cidade,
            e as aventuras em torno do graffiti ilegal no submundo da cidade de Lisboa.
        </div>
        <br></br>
        <div className="flex flex-row justify-around">
            Licenciei em escutura pela Faculdade de Belas Artes de lisboa,
            escolhi esta cidade para viver onde, desde 2008, trabalho no meu atelier como artista plastico.
            tenho trabalhos expostos no MAAT(museu arquitectura, arte e tecnologia) na fundação caluste gulbenkian.
        </div>
        <br></br>
        <div className="flex flex-row justify-around">
            Em 2012, depois do prémio do POPs da Fundação de Serralves (Projectos Originais  Portugueses)
            e de passar 2 anos pela Incubadora de Indústrias Criativas INSerralves,
            comecei a assumir uma vertente menos comercial,
            focando-me em projectos onde exploro um universo dedicado a escultura,
            reinterpretando histórias e materiais, devolvendo emoções em forma de objectos ou instalações em espaço público.
        </div>
        <br></br>
        <div className="flex flex-row justify-around mb-5">
            É neste processo de criação que a sustentabilidade ambiental ganha um forte relevo no meu trabalho,
            onde desperdícios de indústrias, empresas ou museus são transformados em novas peças.
            Por outro lado, a manualidade e rigor da produção estão aliadas a uma forte componente social.
        </div>
    </div>)
}