'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
    const [isTilted, setIsTilted] = useState(false);

    const rodaVermelha = (
        <div
            onClick={() => setIsTilted(!isTilted)}
            className={`relative cursor-pointer rounded-full text-white bg-red-500 w-[300px] h-[300px] inline-block -top-40 -left-40 transition-transform duration-500 origin-center ${
                isTilted ? '-rotate-90' : 'rotate-0'
            }`}
        >
            {/* hamburger */}
            <div className="flex flex-col justify-between w-12 h-9 cursor-pointer relative -bottom-[210px] left-[192px]">
                <div className="h-2 w-full bg-gray-800 rounded"></div>
                <div className="h-2 w-full bg-gray-800 rounded"></div>
                <div className="h-2 w-full bg-gray-800 rounded"></div>
            </div>
            {/* X */}
            <div className="text-6xl text-gray-800 relative -bottom-[280px] -left-[80px] rotate-90">
                X
            </div>
        </div>
    );

    return (
        <div className="container ">
            {/* // fundo vermelho */}
            <div className="bg-red-900 absolute w-full h-full ">
                <ul
                    className={`flex flex-col gap-4 relative top-[80%] text-white text-xl transition-transform duration-700 ease-in-out 
                    ${
                        isTilted ? 'translate-x-[20px]' : '-translate-x-[140px]'
                    }`}
                >
                    <li className="ml-0">Início</li>
                    <li className="ml-5">Sobre</li>
                    <li className="ml-10">Contato</li>
                </ul>
            </div>

            {/* frente verde */}
            <div
                className={`bg-white w-full pb-8cd absolute transition-transform duration-500 origin-top-left  ${
                    isTilted ? '-rotate-[18deg] ' : 'rotate-0'
                }`}
            >
                <div className="w-3/6 mx-auto mt-32">
                    <h1 className='text-5xl'>Patrick Irado</h1>
                    <small className='italic'>Uma galinha irada</small>
                    <p className='mt-4'>
                        Patrick Irado não é uma galinha comum. Ele é a galinha.
                        Com sua crista perfeitamente estilizada e penas
                        brilhantes que refletem o sol como uma verdadeira
                        armadura de guerreiro, Patrick é simplesmente o rei do
                        galinheiro – e possivelmente de todo o universo das
                        aves. O que o torna tão incrível? Bem, prepare-se,
                        porque a lista é longa. Primeiro, Patrick anda de skate.
                        E não é aquele rolê básico de iniciante, não. Ele faz
                        kickflips, desce corrimãos e manda manobras que deixam
                        até os humanos mais experientes de boca aberta. O
                        barulho das rodinhas deslizando na madeira virou o som
                        icônico da fazenda. Quando Patrick está no auge, os
                        outros animais se reúnem para assistir, enquanto ele
                        desliza pelo galinheiro com a maior calma, como se fosse
                        uma estrela de cinema – e, de certa forma, ele é. Ah, e
                        sobre cantar? Esqueça o &quot;cocoricó&quot; na hora
                        certa. Patrick só canta quando quer, geralmente
                        atrasado, mas com estilo. Quando finalmente solta sua
                        voz, o mundo para para ouvir. É como se ele dissesse:
                        &quot;Eu não sigo as regras, as regras me seguem.&quot;
                        Patrick também domina a arte de comer minhocas deitado.
                        Sim, deitado. Enquanto as outras galinhas correm atrás
                        de insetos ou ciscam freneticamente, ele simplesmente se
                        recosta, cruza as asas e saboreia suas minhocas com a
                        tranquilidade de quem sabe que é lendário. E se você
                        acha que galinhas não sobem em árvores, Patrick vai te
                        provar errado. Ele escala os galhos como se fosse um
                        gato, muitas vezes para alcançar lugares impossíveis. Lá
                        do alto, ele observa tudo como um verdadeiro
                        estrategista, decidindo seu próximo movimento – ou
                        apenas aproveitando a vista. Patrick Irado não é apenas
                        uma galinha, ele é um fenômeno. Um exemplo de que ser
                        diferente é ser incrível. E no final do dia, quando ele
                        pousa do skate, sobe na árvore mais alta e solta um
                        &quot;cocoricó&quot; atrasado, todo mundo sabe: Patrick
                        é iradíssimo.
                    </p>
                    <h2 className='text-xl mt-8 mb-4'>Galinha Irada</h2>
                    <Image
                        src="/images/stephen-mierendorf-rR5WwO06VIM-unsplash.jpg"
                        alt="Patrick Irado"
                        width={1000}
                        height={600}
                    />
                    <p className='mt-4'>
                        Patrick é demais! Ele não é apenas uma galinha comum,
                        ele é um verdadeiro ícone. Com seu jeito irreverente e
                        habilidades únicas, ele redefine o que significa ser
                        incrível. Seja andando de skate com a maior destreza,
                        cantando de forma única e sem pressa, ou até comendo
                        minhocas deitado, Patrick sempre se destaca. Sua
                        habilidade de subir em árvores e desafiar os limites da
                        normalidade o coloca em um patamar acima das outras
                        galinhas. Ele não segue regras, ele cria as próprias – e
                        é isso que o torna iradíssimo. Patrick é, sem dúvida,
                        uma lenda viva!
                    </p>
                </div>
            </div>
            {rodaVermelha}
        </div>
    );
}
