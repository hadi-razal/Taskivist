import noteModel from "../models/noteModel.js"

export const addNoteController = async (req, res) => {

    try {
        const { title, desc } = req.body

        const note = noteModel({ title, desc, userId: req.user._id })
        await note.save()
        res.send({
            success: true,
            message: "Note Created Successfully",
            note
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllNotes = async (req, res) => {

    try {

        const userId = req.user._id
        console.log(userId)
        const notes = await noteModel.find({ userId })
        res.send({
            success: true,
            message: "Successfully listed all notes",
            notes
        })
    } catch (error) {
        console.log(error)
    }

}