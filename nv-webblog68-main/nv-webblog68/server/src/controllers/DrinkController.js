module.exports = {
    // GET /drinks
    index(req, res) {
        res.send('เรียกข้อมูลเมนูเครื่องดื่มทั้งหมด')
    },

    // GET /drink/:id
    show(req, res) {
        res.send('ดูข้อมูลเมนูเครื่องดื่ม ID: ' + req.params.id)
    },

    // POST /drink
    create(req, res) {
        res.send('เพิ่มเมนูเครื่องดื่มใหม่: ' + JSON.stringify(req.body))
    },

    // PUT /drink/:id
    update(req, res) {
        res.send(
            'แก้ไขเมนูเครื่องดื่ม ID: ' +
            req.params.id +
            ' ข้อมูลใหม่: ' +
            JSON.stringify(req.body)
        )
    },

    // DELETE /drink/:id
    delete(req, res) {
        res.send('ลบเมนูเครื่องดื่ม ID: ' + req.params.id)
    }
}

