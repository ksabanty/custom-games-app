import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <main>
      <div className="h-screen grid grid-cols-2 gap-4 mt-2 py-1 mx-10">
        <div className="bg-gray-700 flex flex-col">
          <h1 className="text-4xl font-bold text-gray-200">Host Queue 1</h1>
          <p className="text-2xl text-gray-200 mt-2">Join the waitlist...</p>
          <div>
            <TableContainer className="p-6">
              <Table className="bg-white">
                <TableHead>
                  <TableRow>
                    <TableCell># In Total Queue</TableCell>
                    <TableCell>Gamertag</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>snakybat</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="p-2">
            <TextField
              required
              id="outlined-required"
              defaultValue="Enter gamertag..."
              className="bg-white rounded-lg"
            />
          </div>
          <button className="bg-blue-600 text-white py-2 rounded-lg mt-4 w-1/5">Join Queue</button>
        </div>
        <div className="bg-slate-300 flex flex-col">
          <h1 className="text-4xl font-bold text-gray-800">Host Queue 2</h1>
          <p className="text-2xl text-gray-800 mt-2">Join the waitlist...</p>
          <div>
            <TableContainer className="p-6">
              <Table className="bg-white">
                <TableHead>
                  <TableRow>
                    <TableCell># In Total Queue</TableCell>
                    <TableCell>Gamertag</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>snakybat2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="p-2">
            <TextField
              required
              id="outlined-required"
              defaultValue="Enter gamertag..."
              className="bg-white rounded-lg"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 w-1/5">Join Queue</button>
        </div>
      </div>
    </main >
  )
}
