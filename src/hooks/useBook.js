const useBook = (phoneNumber, destination, departureDate, returnDate) => {
  window.open(
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Permisi, apakah saya mau tanya bis besar untuk tujuan ${destination} tanggal ${departureDate} ${
      returnDate ? `sampai ${returnDate}` : ""
    }`,
    "_blank"
  );
};

exports = {
    useBook
}
