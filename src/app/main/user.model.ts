export class User{
    fullname:String;
    email:String;
    password:String;
    phoneno:Number;
    passwordconfirm:String;
    teachingname:String;
    teachingid:Number;
    followingname:String;
    followingId:Number;
  materialname:String;
    materialId:Number;
    identifyname:String;
    identifyid:Number;
    id:Number;
    name:String;
    coursename:String;
    addtag:String;
    categories:String;
    inputfile:String;
    image:String;
    addonarray:[];
    teachingonline:String;
    havefollowing:String;
    trainningmaterial:String;
    identify:String;
    coursemodule:String;
    uploadvideofile:String;
    uploadpdffile:String;
    uploadpptfile:String;
    Courses:[];
    submodulename:String;
   ;








}
interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}
