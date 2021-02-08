module.exports = {
    getPlanes: (req, res) => {
        const db = req.app.get('db')
        db
        .get_planes()
        .then((planes) => {
            res.status(200).send(planes)
        }).catch(err => console.log(err).send(err))
    },
    addPlane: (req, res) => {
        const db = req.app.get('db')
        const { type, passengers } = req.body
        db
            .add_plane([ type, passengers ])
            //below, add as an object. above, add as an array
            //.add_plane({type, passengers})
            .then(planes => {
                res.status(200).send(planes)
            })
            .catch(err => console.log(err).send(err))
    },
}