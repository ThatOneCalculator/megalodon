const detector = require('megalodon').detector
// const generator = require('megalodon').default

export async function detect(url: string) {
  const result = await detector(url);
  return result;
}

// export async function ping(type: string, url: string) {
//   const client = generator(type, url)
//   const stream = client.localSocket()
//   stream.on('connect', () => {
//     console.log('connect')
//   })

//   stream.on('pong', () => {
//     console.log('pong')
//   })
// }

// export async function stream(type: string, url: string, token: string) {
//   const client = generator(type, url, token)

//   const stream = client.localSocket()
//   stream.on('connect', () => {
//     console.log('connect')
//   })

//   stream.on('pong', () => {
//     console.log('pong')
//   })

//   stream.on('update', (status: Entity.Status) => {
//     console.log(status)
//   })

//   stream.on('notification', (notification: Entity.Notification) => {
//     console.log(notification)
//   })

//   stream.on('delete', (id: number) => {
//     console.log(id)
//   })

//   stream.on('error', (err: Error) => {
//     console.error(err)
//   })

//   stream.on('status_update', (status: Entity.Status) => {
//     console.log('updated: ', status.url)
//   })

//   stream.on('heartbeat', () => {
//     console.log('thump.')
//   })

//   stream.on('close', () => {
//     console.log('close')
//   })

//   stream.on('parser-error', (err: Error) => {
//     console.error(err)
//   })

//   setTimeout(() => {
//     stream.removeAllListeners()
//     stream.stop()
//     console.log('closed')
//   }, 10000)

// }
