const customers = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phone: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Active',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
];

const closeBtnRef = document.querySelector('.dashboard__close-btn');
const headerBtnRef = document.querySelector('.dashboard__header-btn');
const mobileMenuRef = document.querySelector('.dashboard__menu-container');

headerBtnRef.addEventListener('click', () =>
  mobileMenuRef.classList.add('is-open')
);
closeBtnRef.addEventListener('click', () =>
  mobileMenuRef.classList.remove('is-open')
);
mobileMenuRef.addEventListener('click', () =>
  mobileMenuRef.classList.remove('is-open')
);

const getTableHTML = customers => {
  return customers.reduce(
    (html, customer) =>
      html +
      `
      <tr class="customers__container-table-rows">
      <td>${customer.name}</td>
      <td>${customer.company}</td>
      <td>${customer.phone}</td>
      <td>${customer.email}</td>
      <td>${customer.country}</td>
      <td><span class="status ${customer.status.toLowerCase()}">${
        customer.status
      }</span></td>
      </tr>
      `,
    ''
  );
};

const renderTableContainer = customers => {
  const tbodyRef = document.querySelector('.customers__container-table tbody');
  tbodyRef.innerHTML = getTableHTML(customers);
};

document.addEventListener('DOMContentLoaded', () => {
  renderTableContainer(customers);
  const logoIcon = document.querySelector('.dashboard__logo-icon');
  setTimeout(() => {
    logoIcon.style.opacity = '1';
    logoIcon.style.transform = 'scale(1)';
    logoIcon.style.animation = 'rotate 2000ms linear 1';
  }, 250);
});
document.addEventListener('DOMContentLoaded', () => {
  const rowsRef = document.querySelectorAll('.customers__container-table-rows');
  rowsRef.forEach((row, index) => {
    setTimeout(() => {
      row.classList.add('visible');
    }, index * 100);
  });
});
