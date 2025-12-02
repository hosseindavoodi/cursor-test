import axios from "axios";

export async function uploadFilesHandler(files: { uploadUrl: string; file: File }[]) {
  const uploadAllFiles = await Promise.all(
    files.map(async (file) => (await axios.put(file.uploadUrl, file.file, { headers: { "Content-Type": file.file.type } })).data)
  );

  return { message: "success" };
}
