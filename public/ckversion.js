// Fetch version from the server
const fetchVersion = async () => {
  try {
    const response = await fetch('/version', { cache: 'no-store' });
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.error('Error fetching /version:', error);
  }
};

// Get the stored version from the local storage
const getStoredVersion = () => localStorage.getItem('storedVersion');

// Store the version in local storage
const storeVersion = (version) => localStorage.setItem('storedVersion', version);

// Check version and hard reload if needed
const checkVersionAndReload = async () => {
  const fetchedVersion = await fetchVersion();
  const storedVersion = getStoredVersion();
  console.log('storedVersion:', storedVersion);
  console.log('fetchedVersion:', fetchedVersion);
  
  if (storedVersion && fetchedVersion !== storedVersion) {
    // Update the stored version before the hard reload
    storeVersion(fetchedVersion);

    // Force a hard reload, bypassing the cache
    console.log("upgrading to version", fetchedVersion);
    window.location.reload(true);
  } else if (!storedVersion) {
    // If no stored version exists, store the fetched version
    console.log("storing version", fetchedVersion);
    storeVersion(fetchedVersion);
  }
};

// On page load, check version and reload if necessary
window.addEventListener('load', checkVersionAndReload);
