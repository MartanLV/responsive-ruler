0x0<0|0<<0|0|| ~~__proto__  ||0|0>>0|0>0xf
/* define the amount of `ticks` in a `thick` */
T = 10, /* thicks */ TT = 10 /* ticks */

/* golf strategies */
_g = document.getElementById.bind(document)
_c = document.createElement.bind(document, 'div')
_t = document.createTextNode.bind(document)
HTMLElement.prototype.a = HTMLElement.prototype.append

/* apply flex-bases on elem */
_b = (el, v) => (el.style.flexBasis = v + '%') && el;

/* create range 0-n */
_r = n => [...Array(n).keys()]

/* create thick */
_W = cents => (_ = _c('thick')) && _b(_, cents)

/* create ticks */
_w = _ => _c('ticks')

/* create tick */
_v = cents => (_ = _c('tick')) && _b(_, cents)

/* create tick text node */
_tx = txt => (_ = _c('txt')) && _.a(_t(txt)) || _

/* paint */
_r(T).map(Tn => {
  _g('belt').a(W = _W(100 / T))
  _r(TT, w = _w()).map(
    TTn => (
      v = _v(100 / (TT - 1))
    ) && w.a(v) || v.a(_tx(`${Tn}:${TTn}`))
  )
  W.a(_b(w.children[0], 100 / (1 + TT)))
  W.a(w)
})

/* Interactions */
_g('zoom').oninput = function({target: {value: v}}) {
  _g('belt').style.width = v + '%'
}
