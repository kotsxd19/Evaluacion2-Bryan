import { Schema,model } from "mongoose";

const especialidadesschema = new Schema({
    specialityName: {type: String},
    description: {type: String},
    isAvailable: {type: Boolean}
}
)

export default model("Especialidades", especialidadesschema)
