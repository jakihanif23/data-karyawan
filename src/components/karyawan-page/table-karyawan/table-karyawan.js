import React, { useState } from "react";
import { Link } from "react-router-dom";
const TableKaryawan = () => {
  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "Zaky Hanif Testandy",
      nip: "1719001",
      jabatan: "Mobile Dev Staff",
      alamat: "Bekasi",
      telp: "081281026497",
      email: "zakyhanif12@gmail.com",
      foto: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP002",
      name: "Ahmad Riadi",
      nip: "1719002",
      jabatan: "Mobile Dev Staff",
      alamat: "Jakarta",
      telp: "081281026421",
      email: "ahmad.r@gmail.com",
      foto: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP003",
      name: "Jamal Bin Abi Laden",
      nip: "1719003",
      jabatan: "Web Dev Staff",
      alamat: "Purwokerto",
      telp: "081281026411",
      email: "jamal.lad@gmail.com",
      foto: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP004",
      name: "Annisa Nur",
      nip: "1719004",
      jabatan: "QA Automaton",
      alamat: "Sleman",
      telp: "081281026417",
      email: "annisa.nur@gmail.com",
      foto: "https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP005",
      name: "Syah Rinna",
      nip: "1719005",
      jabatan: "QA Automaton",
      alamat: "Kebumen",
      telp: "081281026412",
      email: "s.rinna@gmail.com",
      foto: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-cute-girl-avatar-material-png-image_4023832.jpg",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP006",
      name: "Ika Putriyani",
      nip: "1719006",
      jabatan: "Sekertaris",
      alamat: "Bekasi",
      telp: "081281026431",
      email: "ika.p@gmail.com",
      foto: "https://previews.123rf.com/images/nikolaydzhi/nikolaydzhi1609/nikolaydzhi160900319/64778751-muslim-girl-avatar-arab-beautiful-woman-in-green-hijab-vector.jpg",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP007",
      name: "Rafli Adriansyah",
      nip: "1719007",
      jabatan: "UI UX Designer",
      alamat: "Cakung",
      telp: "081281026489",
      email: "raf.adri@gmail.com",
      foto: "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP008",
      name: "Arnelka Hananta",
      nip: "1719001",
      jabatan: "UI UX Designer",
      alamat: "Bekasi",
      telp: "081281026437",
      email: "arnel.hanan@gmail.com",
      foto: "https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP009",
      name: "Theo Felix",
      nip: "1719009",
      jabatan: "Web Dev Staff",
      alamat: "Tanggerang",
      telp: "081281026477",
      email: "th.felix@gmail.com",
      foto: "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18514.jpg?w=2000",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP010",
      name: "Ronny William",
      nip: "1719010",
      jabatan: "Graphic Designer",
      alamat: "Bogor",
      telp: "081281026400",
      email: "ronn.will@gmail.com",
      foto: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294775_1280.png",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
    {
      id: "EMP011",
      name: "Sultan Rafi",
      nip: "1719011",
      jabatan: "UI UX Designer",
      alamat: "Bekasi",
      telp: "081281026488",
      email: "sultan.rafi@gmail.com",
      foto: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
      createdAt: "2017-05-25",
      createdBy: "admin",
    },
  ]);
  return (
    <table className="uk-table uk-table-hover uk-table-divider">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama Karyawan</th>
          <th>NIP</th>
          <th>Jabatan</th>
          <th>Alamat</th>
          <th>Nomor Telpon</th>
          <th>Email</th>
          <th>Foto</th>
          <th>Created At</th>
          <th>Created By</th>
        </tr>
      </thead>
      {employees.length !== 0 ? (
        employees.map((data, index) => {
          const {
            id,
            name,
            nip,
            jabatan,
            alamat,
            telp,
            email,
            foto,
            createdAt,
            createdBy,
          } = data;
          return (
            <tbody key={index}>
              <tr>
                <td>
                  <Link to="detail" state={data}>
                    {id}
                  </Link>
                </td>
                <td>{name}</td>
                <td>{nip}</td>
                <td>{jabatan}</td>
                <td>{alamat}</td>
                <td>{telp}</td>
                <td>{email}</td>
                <td>
                  <img className="img-sizing-table" src={foto} />
                </td>
                <td>{createdAt}</td>
                <td>{createdBy}</td>
              </tr>
            </tbody>
          );
        })
      ) : (
        <tbody></tbody>
      )}
      {/* <tbody>
        <tr>
          <td>Table Data</td>
          <td>Table Data</td>
          <td>Table Data</td>
        </tr>
        <tr>
          <td>Table Data</td>
          <td>Table Data</td>
          <td>Table Data</td>
        </tr>
        <tr>
          <td>Table Data</td>
          <td>Table Data</td>
          <td>Table Data</td>
        </tr>
      </tbody> */}
    </table>
  );
};

export default TableKaryawan;
