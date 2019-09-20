import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import AWS from 'aws-sdk';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.get('/items', (req, res) => {
		res.end(JSON.stringify(
		{"items": [
	    {
	      name: 'Klaura',
	      price: 25.60,
	      volume: 330,
	      abv: 0.052,
	      costPerAlcMl: 1.52,
	      group: 'beer',
	      rank: 352,
	      organic: true
	    },
	    {
	      name: 'Cognac Leyrat',
	      price: 431,
	      volume: 700,
	      abv: 0.4,
	      costPerAlcMl: 1.53,
	      group: 'spirits',
	      rank: 353,
	      organic: false
	    },
	    {
	      name: 'Halmstad Brygghus',
	      price: 21.9,
	      volume: 330,
	      abv: 0.055,
	      costPerAlcMl: 1.51,
	      group: 'beer',
	      rank: 349,
	      organic: true
	    }
	  ]}));
	})
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
