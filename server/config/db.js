import mongoose from 'mongoose'

const ConnectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected TO MongoDB`)

    } catch (error) {
        console.log(`Error In MongoDB ${error}`)
    }

}

export default ConnectDB;