<template>
  <div class="pay-methods">
    <div class="card">
      <h2>Platební karta</h2>

      <div>
        <a href="#" class="btn">
          <div>Platba kartou</div>
          <div class="options">
            <visa/>
            <master-card/>
          </div>
        </a>
        <a href="#" class="btn">
          <div>Zaplatit přes</div>
          <apple-pay/>
        </a>
        <a href="#" class="btn">
          <div>Zaplatit přes</div>
          <google-pay/>
        </a>
      </div>
    </div>
    <div class="deffered">
      <h2>Odložená platba</h2>
      <div>
        <button>
          <platim-pak/>
        </button>
      </div>

    </div>
    <div class="internet-banking">
      <h2>Bankovní tlačítka</h2>

      <div class="first-row">
        <button>
          <ceska-sporitelna/>
        </button>
        <button>
          <kb/>
        </button>
        <button>
          <csob/>
        </button>
      </div>

      <div class="second-row">
        <button>
          <postovni-sporitelna/>
        </button>
        <button>
          <raiffeinsen-bank/>
        </button>
        <button>
          <m-bank/>
        </button>
      </div>

      <div class="third-row">
        <button>
          <fio/>
        </button>
        <button>
          <moneta/>
        </button>
        <button>
          <equa-bank/>
        </button>
      </div>

    </div>
    <div class="others">
      <h2>Ostatní</h2>

      <div>
        <button>
          Jiná banka
        </button>
        <button>
          <bitcoin/>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PayMethod',
}
</script>