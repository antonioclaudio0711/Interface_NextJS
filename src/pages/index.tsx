import { useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente("Antônio Claudio", 19, "1"),
    new Cliente("Rita de Cássia", 25, "2"),
    new Cliente("Josué Henrique Siqueira", 20, "3"),
    new Cliente("Pedro Henrique Pereira de Melo", 25, "4"),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir ${cliente.nome} ...`)
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-purple-800
      text-white
    `}>
      <Layout titulo="Cadastro Simples - PlaTheia">
        {visivel === 'tabela' ? (
          <>
          <div className="flex justify-end">
            <Botao cor="green" className="mb-4" onClick={novoCliente}>
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido} 
          />
          </>

        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}
