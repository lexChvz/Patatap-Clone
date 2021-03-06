var keyData = {
			q: {
				color: '#a46d50',
				sound: new Howl ({
					src: ['sounds/bubbles.mp3']
				})
			}, 
			w: {
				color: '#d320d3',
				sound: new Howl ({
					src: ['sounds/clay.mp3']
				})
			},
			e: {
				color: '#eed7f3',
				sound: new Howl ({
					src: ['sounds/confetti.mp3']
				})
			},
			r: {
				color: '#30e421',
				sound: new Howl ({
					src: ['sounds/corona.mp3']
				})
			},
			t: {
				color: '#e420a4',
				sound: new Howl ({
					src: ['sounds/dotted-spiral.mp3']
				})
			},
			y: {
				color: '#16e9a2',
				sound: new Howl ({
					src: ['sounds/flash-1.mp3']
				})
			},
			u: {
				color: '#e5e8b3',
				sound: new Howl ({
					src: ['sounds/flash-2.mp3']
				})
			},
			i: {
				color: '#c4c4c4',
				sound: new Howl ({
					src: ['sounds/flash-3.mp3']
				})
			},
			o: {
				color: '#c5b8f5',
				sound: new Howl ({
					src: ['sounds/glimmer.mp3']
				})
			},
			p: {
				color: '#b4c5f6',
				sound: new Howl ({
					src: ['sounds/glimmer.mp3']
				})
			},
			a: {
				color: '#d8a6e2',
				sound: new Howl ({
					src: ['sounds/moon.mp3']
				})
			},
			s: {
				color: '#a9f3b6',
				sound: new Howl ({
					src: ['sounds/pinwheel.mp3']
				})
			},
			d: {
				color: "#d4a3d4",
				sound: new Howl ({
					src: ['sounds/piston-1.mp3']
				})
			},
			f: {
				color: "#c9c991",
				sound: new Howl ({
					src: ['sounds/piston-2.mp3']
				})
			},
			g: {
				color: "#3f9daa",
				sound: new Howl ({
					src: ['sounds/piston-3.mp3']
				})
			},
			h: {
				color: "#ff9a8f",
				sound: new Howl ({
					src: ['sounds/prism-1.mp3']
				})
			},
			j: {
				color: "#aaddf1",
				sound: new Howl ({
					src: ['sounds/prism-2.mp3']
				})
			},
			k: {
				color: "#c94a9f",
				sound: new Howl ({
					src: ['sounds/prism-3.mp3']
				})
			},
			l: {
				color: "#9ec4d4",
				sound: new Howl ({
					src: ['sounds/splits.mp3']
				})
			},
			z: {
				color: '#989ad1',
				sound: new Howl ({
					src: ['sounds/squiggle.mp3']
				})
			},
			x: {
				color: '#5d4a43',
				sound: new Howl ({
					src: ['sounds/strike.mp3']
				})
			},
			c: {
				color: '#f245e9',
				sound: new Howl ({
					src: ['sounds/suspension.mp3']
				})
			},
			v: {
				color: '#5af55a',
				sound: new Howl ({
					src: ['sounds/timer.mp3']
				})
			},
			b: {
				color: '#e8f9d1',
				sound: new Howl ({
					src: ['sounds/ufo.mp3']
				})
			},
			n: {
				color: '#1ac2e3',
				sound: new Howl ({
					src: ['sounds/veil.mp3']
				})
			},
			m: {
				color: '#f3b5c9',
				sound: new Howl ({
					src: ['sounds/wipe.mp3']
				})
			}
		};
		
		var circles = [];
		function onKeyDown(event){
			if(keyData[event.key])
			{
			var maxPoint = new Point(view.size.width, view.size.height);
			var randomPoint = Point.random();
			var point = maxPoint * randomPoint;
			var newCircle = new Path.Circle(point, 500);
			newCircle.fillColor = keyData[event.key].color;
			keyData[event.key].sound.play();
			circles.push(newCircle);
			}
		}
		function onFrame(event){
			for (var i = 0; i < circles.length; i++){
				circles[i].fillColor.hue += 1;
				circles[i].scale(.9);
			}
		}
        }