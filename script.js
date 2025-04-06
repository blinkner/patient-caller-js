document.getElementById('salvar_paciente').addEventListener('click', (e) => {
    let input_paciente = document.getElementById('paciente');

    if (input_paciente.value != '') {
        let linha = document.createElement('tr');

        let td_nome = document.createElement('td');
        td_nome.innerText = input_paciente.value;

        const td_local = document.createElement('td');
        const select_local = document.createElement('select');
        const opt1 = document.createElement('option');
        opt1.innerText = "Sala 01";
        const opt2 = document.createElement('option');
        opt2.innerText = "Sala 02";
        select_local.appendChild(opt1);
        select_local.appendChild(opt2);
        td_local.appendChild(select_local);

        let td_chamar = document.createElement('td');
        let btn_chamar = document.createElement('button');
        btn_chamar.type = 'button';
        btn_chamar.classList.add('btn-chamar');
        btn_chamar.innerText = 'Chamar';

        btn_chamar.addEventListener('click', () => {
            let paciente = td_nome.innerText;
            bc.postMessage(`{"nome": "${paciente}", "local": "${select_local.value}"}`);
        });

        td_chamar.appendChild(btn_chamar);

        let td_excluir = document.createElement('td');
        let btn_excluir = document.createElement('button');
        btn_excluir.type = 'button';
        btn_excluir.classList.add('btn-excluir');
        btn_excluir.innerText = 'Excluir';

        btn_excluir.addEventListener('click', () => {
            btn_excluir.parentElement.parentElement.parentElement.removeChild(btn_excluir.parentElement.parentElement);
        });
        td_excluir.appendChild(btn_excluir);

        linha.appendChild(td_nome);
        linha.appendChild(td_local);
        linha.appendChild(td_chamar);
        linha.appendChild(td_excluir);

        const corpo_tabela = document.getElementById('corpo-tabela');
        corpo_tabela.appendChild(linha);

        input_paciente.value = '';
    }
});

const bc = new BroadcastChannel('canalChamador');
const btn_chamador = document.getElementById('btn-chamador').addEventListener('click', () => {
    window.open('caller.html', '_blank');
})