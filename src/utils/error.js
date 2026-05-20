export const Selector = {
  NOT_FOUND: "notFound", //404
  FORMAT: "format", // 400
  BAD_ERROR: "badError", // 500
  UNAUTHORIZED: "unauthorized", // 401
  FORBIDDEN: "forbidden", // 403
}

const errors = {
  [Selector.FORMAT]: {
    // con los corchetes evaluamos lo que hay dentro
    statusCode: 400,
    message: "incorrect data input",
  },
  [Selector.UNAUTHORIZED]: {
    statusCode: 401,
    message: "unauthozired",
  },
  [Selector.NOT_FOUND]: {
    statusCode: 404,
    message: "resource not found",
  },
  [Selector.BAD_ERROR]: {
    statusCode: 500,
    message: "something went wrong",
  },
  [Selector.FORBIDDEN]: {
    statusCode: 403,
    message: "you don't have permission",
  },
}

class CError extends Error {
  // declaramos un molde (clase) heredando las propiedades del constructor Error
  constructor(errorType, customStatusCode = 418) {
    // definimos propiedades, es lo que se ejecuta al llamarla
    super("") // llama al constructor del Error original. Se le pasa un string vacío porque nosotros vamos a gestionar el mensaje de forma personalizada abajo.
    this.customCode = customStatusCode // Guarda el código por defecto dentro de la "mochila" del objeto actual (this) para usarlo más tarde si hace falta.

    const { statusCode, message } = this.getError(errorType)
    this.errorType = errorType
    this.message = message
    this.statusCode = statusCode
  }

  getError(errorType = Selector.BAD_ERROR) {
    return errors[errorType] ?? this.setCustomMessage(errorType)
  }

  setCustomMessage(message) {
    return { statusCode: this.customCode, message }
  }
}

export default CError
