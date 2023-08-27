import Head from 'next/head';
import FormCadastrar from "./cadastrar"

export default function CadastroPage(){
    return(
        <>
         <Head>
        <title>Inova IF | Cadastrar</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
            <FormCadastrar/>
       
        </>
    )
}