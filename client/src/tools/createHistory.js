import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

const _listen = history.listen

history.listen = function (cb) {
    cb(history.location, history.action)
    _listen.call(history, cb)
}

window.skio_history = history

export default history