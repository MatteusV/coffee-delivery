import { registerUser } from '../api/registerUser'

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <form action={registerUser} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Registro</h1>
          <div className="mb-4 w-full">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Nome de Usuário
            </label>
            <input
              type="text"
              id="username"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              Estado
            </label>
            <input
              type="text"
              name="state"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              Cidade
            </label>
            <input
              type="text"
              name="city"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="text-base-text font-baloo2 font-semibold py-2 px-8 rounded-md bg-yellow hover:text-white"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
