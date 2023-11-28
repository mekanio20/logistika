const router = require('express').Router()
const { 
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
} = require('../controller/control')

router.route('/').get(HomePage_get)
router.route('/train').get(TrainPage_get).post(TrainPage_post)
router.route('/aeroplane').get(AeroplanePage_get).post(AeroplanePage_post)
router.route('/buses').get(BusPage_get).post(BusPage_post)
router.route('/about').get(AboutPage_get)
router.route('/contact').get(ContactPage_get)
router.route('/delete/train/:id').get(DeleteTrain_get)
router.route('/delete/buses/:id').get(DeleteBus_get)
router.route('/delete/aeroplane/:id').get(DeleteAeroplane_get)

module.exports = router