import express from 'express'
import router from './controllers';

// https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a

const PORT = 3000
const app = express()

app.use(router)

app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }

  console.log('listening on ' + PORT + '...')
})
