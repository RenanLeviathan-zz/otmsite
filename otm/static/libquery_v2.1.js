/*
 * 
 * @author Renan
 * Libquery.js v2.0
 */
(function() {
    var hs = new Array(), el, nodes = new Array(), context, o, h;
    $ = function(e) {
        var jq = {
            init: function(e) {
                if (typeof e === "string") {
                    if (/^#/.test(e)) {
                        el = document.getElementById(/\w+/.exec(e))
                    } else if (/^\./.test(e)) {
                        nodes = document.getElementsByClassName(/\w+/.exec(e))
                    } else if (/^\w/.test(e)) {
                        nodes = document.getElementsByTagName(e)
                    }
                } else if (typeof e === "object") {
                    if (e === document | e === window) {
                        context = e
                    } else {
                        el = e
                    }
                }
                return jq
            },
            click: function(fn) {
                if (el !== undefined)
                    el.onclick = fn
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].onclick = fn
                    }
                }
            },
            over: function(fn) {
                if (el !== undefined)
                    el.onmouseover = fn
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].onmouseover = fn
                    }
                }
            },
            out: function(fn) {
                if (el !== undefined)
                    el.onmouseout = fn
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].onmouseout = fn
                    }
                }
            },
            down: function(fn) {
                if (el !== undefined)
                    el.onmousedown = fn
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].onmousedown = fn
                    }
                }
            }
            ,
            up: function(fn) {
                if (el !== undefined)
                    el.onmouseup = fn
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].onmouseup = fn
                    }
                }
            },
            dragStart: function(fn) {
                if (el !== undefined)
                    el.ondragstart = fn
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].ondragstart = fn
                    }
                }
            }
            ,
            dragEnd: function(fn) {
                if (el !== undefined)
                    el.ondragend = fn
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].ondragend = fn
                    }
                }
            },
            dragOver: function(fn) {
                if (el !== undefined)
                    el.ondragover = fn
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].ondragover = fn
                    }
                }
            },
            drop: function(fn) {
                if (el !== undefined)
                    el.ondrop = fn
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].ondrop = fn
                    }
                }
            },
            className: function(cName) {
            	if(cName===undefined){
                return el.className;
            	}else{
            		el.className=cName;
            	}
            },
            append: function(child){
            	if(child!==undefined){
            		el.appendChild(child);
            	}
            },
            childNodes: function() {
                return el.childNodes;
            },
            keyDown: function(fn) {
                context.onkeydown = fn;
            },
            keyUp: function(fn) {
                context.onkeyup = fn;
            },
            blur: function(fn) {
                if (el !== undefined)
                    el.onblur = fn;
                if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].onblur = fn;
                    }
                }
            },
            removeFocus: function(){
            	if(el!==undefined){
            		el.blur();
            	}
            },
            ready: function(fn) {
                context.onreadystatechange = fn;
                context.onload = fn;
            },
            slideUp: function(duration, callback) {
                if (el !== undefined) {
                    h = el.offsetHeight
                    el.style.transition = duration + "s"
                    el.style.overflow = "hidden"
                    el.style.height = "0px"
                } else if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        hs[i] = nodes[i].offsetHeight
                        nodes[i].style.transition = duration + "s"
                        nodes[i].style.overflow = "hidden"
                        nodes[i].style.height = "0px"
                    }
                }
                if (callback !== undefined)
                    setTimeout(function() {
                        callback.call()
                    }, duration * 1000)
            },
            slideDown: function(duration) {
                if (el !== undefined) {
                    el.style.transition = duration + "s"
                    el.style.height = h
                } else if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].style.transition = duration + "s"
                        nodes[i].style.height = hs[i] + "px"
                    }
                }
            },
            fadeOut: function(duration) {
                o = el.style.opacity;
                el.style.transition = duration + "s"
                el.style.opacity = 0
            },
            fadeIn: function(duration) {
                el.style.transition = duration + "s"
                el.style.opacity = o;
            },
            remove: function() {
                el.style.display = "none"
            },
            text: function(str) {
                if (str === undefined) {
                    var txt = new Array()
                    if (el !== undefined) {
                        return el.textContent || el.value;
                    } else if (nodes.length !== 0) {
                        for (var i = 0; i < nodes.length; i++) {
                            txt = nodes[i].textContent || nodes[i].value;
                        }
                        return txt
                    }
                } else {
                    if (el !== undefined) {
                        el.textContent = str
                        if(el.value !== undefined) el.value=str;
                    } else if (nodes.length !== 0) {
                        for (var i = 0; i < nodes.length; i++) {
                            nodes[i].textContent = txt
                        }
                    }
                }
            },
            src: function(str) {
                if (str === undefined) {
                    var srcs = new Array();
                    if (el !== undefined) {
                        return el.src;
                    } else if (nodes.length !== 0) {
                        for (var i = 0; i < nodes.length; i++) {
                            srcs = nodes[i].src;
                        }
                        return srcs;
                    }
                } else {
                    if (el !== undefined) {
                        el.src = str;
                    } else if (nodes.length !== 0) {
                        for (var i = 0; i < nodes.length; i++) {
                            srcs[i].src = str;
                        }
                    }
                }
            },
            css: function(prop, value) {
                if (el !== undefined) {
                    el.style.cssText = prop + ":" + value
                } else if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].style.cssText = prop + ":" + value
                    }
                }
            },
            moveX: function(qtd, duration) {
                if (el !== undefined) {
                    el.style.transition = duration + "s"
                    el.style.left = qtd + "px"
                } else if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].style.transition = duration + "s"
                        nodes[i].style.left = qtd + "px"
                    }
                }
            },
            moveY: function(qtd, duration) {
                if (el !== undefined) {
                    el.style.transition = duration + "s"
                    el.style.top = qtd + "px"
                } else if (nodes.length !== 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].style.transition = duration + "s"
                        nodes[i].style.top = qtd + "px"
                    }
                }
            },
            width: function() {
                return el.offsetWidth;
            },
            height: function() {
                return el.offsetHeight;
            }
        }
        return new jq.init(e);
    }
}())
