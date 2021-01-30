let login = `
  <div id="wrapper">
    <div id="header">
      <div class="header__title">MARVEL</div>
    </div>
    <div id="content">
      <div>
        <p id="login_error_msg">Invalid keys</p>
      </div>
      <form id="login_form" onsubmit="handleLogin(event)">
        <input type="text" name="public_key" id="public_key" placeholder="public key"/>
        <input type="password" name="private_key" id="private_key"  placeholder="private key"/>
        <input type="submit" value="Assemble!" />
      </form>
    </div>
  </div>
`;
