const { Bus, Train, Aeroplane } = require('../config/model')

// GET PAGES

const HomePage_get = async (req, res) => {
    try {
        return res.status(200).render('index')
    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

const TrainPage_get = async (req, res) => {
    try {

        const trains = await Train.findAll({ order: [['id', 'ASC']]})

        return res.status(200).render('train', { trains: trains })

    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

const AeroplanePage_get = async (req, res) => {
    try {

        const aeroplanes = await Aeroplane.findAll({ order: [['id', 'ASC']]})

        return res.status(200).render('aeroplane', { aeroplanes: aeroplanes })

    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

const BusPage_get = async (req, res) => {
    try {
        
        const buses = await Bus.findAll({ order: [['id', 'ASC']]})

        return res.status(200).render('buses', { buses: buses })
    
    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

const AboutPage_get = async (req, res) => {
    try {
        return res.status(200).render('about')
    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

const ContactPage_get = async (req, res) => {
    try {
        return res.status(200).render('contact')
    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

// POST PAGES

const TrainPage_post = async (req, res) => {
    try {
        const { number, path, b_time, e_time, ds, sh, cr, pn, an, ss, yk } = req.body

        await Train.create({
            number: number,
            path: path,
            distance: b_time,
            continuity: e_time,
            ds: ds,
            sh: sh,
            cr: cr,
            pn: pn,
            an: an,
            ss: ss,
            yk: yk
        })

        return res.status(201).redirect('/train')

    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

const AeroplanePage_post = async (req, res) => {
    try {
        const { number, path, b_time, e_time, ds, sh, cr, pn, an, ss, yk } = req.body

        await Aeroplane.create({
            number: number,
            path: path,
            distance: b_time,
            continuity: e_time,
            ds: ds,
            sh: sh,
            cr: cr,
            pn: pn,
            an: an,
            ss: ss,
            yk: yk
        })

        return res.status(201).redirect('/aeroplane')

    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

const BusPage_post = async (req, res) => {
    try {
        const { number, path, b_time, e_time, ds, sh, cr, pn, an, ss, yk } = req.body

        await Bus.create({
            number: number,
            path: path,
            distance: b_time,
            continuity: e_time,
            ds: ds,
            sh: sh,
            cr: cr,
            pn: pn,
            an: an,
            ss: ss,
            yk: yk
        })

        return res.status(201).redirect('/buses')

    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

// DELETE PAGES

const DeleteTrain_get = async (req, res) => {
    try {
        const { id } = req.params

        const car = await Train.findByPk(id)

        if (car.id) { 
            await Train.destroy({ where: { id: id }})
            return res.status(200).redirect('/train')
        }

        return res.status(404).send('Ýalňyşlyk ýüze çykdy!')

    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

const DeleteBus_get = async (req, res) => {
    try {
        const { id } = req.params

        const car = await Bus.findByPk(id)

        if (car.id) { 
            await Bus.destroy({ where: { id: id }})
            return res.status(200).redirect('/buses')
        }

        return res.status(404).send('Ýalňyşlyk ýüze çykdy!')

    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

const DeleteAeroplane_get = async (req, res) => {
    try {
        const { id } = req.params

        const car = await Aeroplane.findByPk(id)

        if (car.id) { 
            await Aeroplane.destroy({ where: { id: id }})
            return res.status(200).redirect('/aeroplane')
        }

        return res.status(404).send('Ýalňyşlyk ýüze çykdy!')

    } catch (error) {
        console.log('Error occurred: ', error.message);
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    HomePage_get,
    TrainPage_get,
    AeroplanePage_get,
    BusPage_get,
    AboutPage_get,
    ContactPage_get,
    TrainPage_post,
    AeroplanePage_post,
    BusPage_post,
    DeleteTrain_get,
    DeleteBus_get,
    DeleteAeroplane_get
}