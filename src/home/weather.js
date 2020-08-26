function GeoFindMe() {

  const status = document.querySelector('#status')
  const mapLink = document.querySelector('#map-link')

  mapLink.href = ''
  mapLink.textContent = ''

  function success(position) {
    const { latitude } = position.coords
    const { longitude } = position.coords

    status.textContent = ''
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`
  }

  function error() {
    status.textContent = 'Unable to retrieve your location'
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser'
  } else {
    status.textContent = 'Locating…'
    navigator.geolocation.getCurrentPosition(success, error)
  }

  return(
      <p id="status"></p>
      <a id="map-link"></a>
  )
}

document.querySelector('#find-me').addEventListener('click', GeoFindMe)

export default GeoFindMe
