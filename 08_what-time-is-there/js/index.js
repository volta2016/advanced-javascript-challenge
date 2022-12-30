// crear una función que pueda calcular las diferentes zonas horarias

const timeZones = [
  {
    offset: -10,
    texto: "(UTC-10:00) Hawaii",
  },
  {
    offset: -6,
    texto: "(UTC-06:00) Central America",
  },
  {
    offset: -8,
    texto: "(UTC-09:00) Alaska",
  },
  {
    offset: -7,
    texto: "(UTC-07:00) Pacific Daylight Time (US & Canada)",
  },
  {
    offset: -7,
    texto: "(UTC-07:00) Arizona",
  },
  {
    offset: 1,
    texto: "(UTC) Dublin, Lisbon",
  },
  {
    offset: 0,
    texto: "(UTC) Greenwich Standard Time",
  },
  {
    offset: 2,
    texto: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
  },

  {
    offset: 4,
    texto: "(UTC+04:00) Abu Dhabi, Muscat",
  },
  {
    offset: 5.5,
    texto: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
  },
  {
    offset: 7,
    texto: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
  },
  {
    offset: 8,
    texto: "(UTC+08:00) Perth",
  },
];

console.log("pok");
const ul = document.getElementById("resultado");
const ms_hour = 100 * 60 * 60;

for (zone of timeZones) {
  console.log(`${zone.texto}: ${calculateTimeZone(zone.offset)}`);
  const li = document.createElement("li");
  li.innerHTML = `${calculateTimeZone(zone.offset)}`;
  ul.appendChild(li);
}

function calculateTimeZone(offset) {
  const today = new Date();
  const utc = today.getTime();
  const localTime = new Date(utc + offset * ms_hour);
  return localTime.toLocaleString();
}
