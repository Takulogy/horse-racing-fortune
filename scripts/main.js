// 馬名データベース（占い用のファンタジー馬名）
const horseNames = [
    "サンダーボルト", "ゴールデンウィング", "ファイアーストーム", "スピードスター",
    "ミラクルランナー", "ブラックダイヤモンド", "シルバーアロー", "クリムゾンフレーム",
    "エメラルドキング", "サファイアプリンス", "ルビーエンジェル", "アメジストクイーン",
    "ダイヤモンドフラッシュ", "プラチナムレイン", "ゴールドラッシュ", "スターライト",
    "ムーンビーム", "サンライズ"
];

// 実際のレース出走馬データベース
const raceHorses = {
    'takarazuka': [
        'レガレイラ', 'ベラジオオペラ', 'アーバンシック', 'ヨーホーレイク', 
        'メイショウタバル', 'リビアングラス', 'ロードデルレイ', 'ショウナンラプンタ',
        'ウォーターリヒト', 'サンライズフラグ', 'ソールオリエンス',
        'ドゥレッツア', 'プライドランド', 'エーデルワイゼ', 'グランデサムライ',
        'プラダリア', 'ステラブルー', 'キングオブコージ'
    ],
    'yasuda': [
        'ジャンタルマンタル', 'ガイアフォース', 'ソウルラッシュ', 'ブレイディヴェーグ',
        'シックスペンス', 'ジュンブロッサム', 'マッドクール', 'ウインマーベル',
        'トロヴァトーレ', 'シャンパンカラー', 'エコロヴァルツ', 'プリティアンジェル',
        'ヴェローナシチー', 'スレートデジタル', 'バイオスフィア', 'ナムラクレア',
        'モードブリーズ', 'レジーナメッセ'
    ],
    'derby': [
        'クロワデュノール', 'アリストテレス', 'ショウナンマッキー', 'レゾナンス',
        'ワールドリバー', 'シンエンペラー', 'ホウオウガイア', 'アドマイヤベルク',
        'ステラリア', 'サーマルエナジー', 'ブルーミングスカイ', 'フロンティア',
        'ダンツフォワード', 'サラブレドパイ', 'ペガサステール', 'シルバーウィングス',
        'コスモティアラ', 'レディーローズ'
    ],
    'oaks': [
        'ライトバック', 'クレムスディオ', 'レガレイラ', 'ノーベルスマイル',
        'オークションハウス', 'ダストデビル', 'マリソープ', 'アズサン',
        'シーニックガーデン', 'クライマックスデー', 'アートゲル', 'コスモブルー',
        'マイヘッド', 'ダークファンタジー', 'ゴールデンウィング', 'スターライト',
        'アベニューアート', 'ラブリープリンセス'
    ],
    'victoria': [
        'レガレイラ', 'ブレイディヴェーグ', 'シックスペンス', 'アカイトリノムスメ',
        'リバティアイランド', 'サンクテュエール', 'ソーヴァリアント', 'モーリス',
        'ナスノユメ', 'リューニング', 'ストーミーシー', 'アルアイン',
        'スカーレットカラー', 'メイケイエール', 'プリティアンジェル', 'リオンリオン',
        'ヴェロニカ', 'シルビアン'
    ],
    'tennosho_spring': [
        'レガレイラ', 'ショウナンラプンタ', 'ヴェローナシチー', 'タイトルホルダー',
        'スレートデジタル', 'ウォーターリヒト', 'アヴァンセ', 'キングスオーダー',
        'テンポイント', 'ゴールドアクター', 'ウシュバテソーロ', 'ドゥレッツア',
        'ワールドプレミア', 'ブラストワンピース', 'ソールオリエンス', 'エーデルワイゼ',
        'シュルヴィン', 'スペクタクル'
    ],
    'oka_sho': [
        'ライトバック', 'レガレイラ', 'クレムスディオ', 'ライフバンクー',
        'トゥドアプライム', 'ソフィアライブ', 'ニューモデル', 'ゴールドハンター',
        'ニシノコンキスタ', 'ノーベルスマイル', 'エムティービー', 'リリカルホワイト',
        'サクラプロミス', 'ビアンカ', 'ピンクカメハメハ', 'ソリタリー',
        'グランドスラム', 'レディーフレイ'
    ],
    'satsuki_sho': [
        'アリストテレス', 'ショウナンマッキー', 'レゾナンス', 'シンエンペラー',
        'アドマイヤベルク', 'ブルーミングスカイ', 'ダンツフォワード', 'アスクドリームス',
        'コズミックフォース', 'ホウオウガイア', 'フロンティア', 'サーマルエナジー',
        'ペガサステール', 'トーセンアラン', 'スーパーフェニックス', 'エアフォース',
        'シルバーウィングス', 'ロードストーム'
    ]
};

// 占いメッセージ（対象レース別）
const raceSpecificMessages = {
    'takarazuka': [
        "宝塚記念は上半期の頂点を決める一戦！この馬があなたに栄光をもたらします。",
        "阪神競馬場の坂を制するのはこの馬です。あなたの応援が勝利への鍵となるでしょう。",
        "ファン投票の宝塚記念、あなたの心が選んだこの馬が奇跡を起こします。"
    ],
    'yasuda': [
        "安田記念はマイル王決定戦！この馬があなたに速さと興奮を届けてくれました。",
        "東京1600mを制したこの馬、あなたの直感力の証明です。",
        "スピードの祭典で選ばれしこの馬、素晴らしい結果だったはずです。"
    ],
    'derby': [
        "日本ダービーは3歳馬の最高峰！この馬があなたにクラシックの感動をもたらしました。",
        "府中の直線を駆け抜けたこの馬、あなたの青春の1ページを飾ったはずです。",
        "ダービー馬はヒーロー！この馬があなたに永遠の思い出を残してくれました。"
    ]
};

const defaultMessages = [
    "今日のあなたには勝利の風が吹いています。この馬があなたに幸運をもたらすでしょう。",
    "星の配置があなたとこの馬の絆を示しています。信じて応援しましょう。",
    "あなたの直感力が最高潮に達しています。この馬が奇跡を起こすかもしれません。",
    "運命の歯車が動き始めました。この馬があなたの期待に応えてくれるはずです。"
];

// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fortuneForm').addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        startFortune();
        return false;
    });
});

function startFortune() {
    const zodiac = document.getElementById('zodiac').value;
    const bloodType = document.getElementById('bloodType').value;
    const targetRace = document.getElementById('targetRace').value;
    const luckyNumber = parseInt(document.getElementById('luckyNumber').value);

    if (!zodiac || !bloodType || !targetRace || !luckyNumber) {
        alert('すべての項目を入力してください。');
        return;
    }

    // ローディング表示
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.querySelector('.fortune-btn').disabled = true;

    // 占い計算（2秒後に結果表示）
    setTimeout(() => {
        const result = calculateFortune(zodiac, bloodType, targetRace, luckyNumber);
        displayResult(result);
    }, 2000);
}

function calculateFortune(zodiac, bloodType, targetRace, luckyNumber) {
    // 占いロジック
    let seed = 0;
    
    // 星座による基本数値
    const zodiacValues = {
        'aries': 1, 'taurus': 2, 'gemini': 3, 'cancer': 4,
        'leo': 5, 'virgo': 6, 'libra': 7, 'scorpio': 8,
        'sagittarius': 9, 'capricorn': 10, 'aquarius': 11, 'pisces': 12
    };
    
    // 血液型による係数
    const bloodTypeValues = {
        'A': 3, 'B': 7, 'O': 11, 'AB': 13
    };

    // 対象レースによる補正値
    const raceValues = {
        'takarazuka': 5, 'yasuda': 8, 'derby': 12, 'oaks': 9,
        'victoria': 6, 'tennosho_spring': 15, 'oka_sho': 4, 'satsuki_sho': 7
    };

    seed = (zodiacValues[zodiac] * bloodTypeValues[bloodType] + raceValues[targetRace] + luckyNumber) % 18 + 1;
    
    const horseNumber = seed;
    const horseName = horseNames[seed - 1];
    
    // 実際のレース馬をランダムで選択
    const actualRaceHorses = raceHorses[targetRace] || [];
    const actualHorse = actualRaceHorses.length > 0 ? 
        actualRaceHorses[Math.floor(Math.random() * actualRaceHorses.length)] : null;
    
    // 対象レース別のメッセージを取得
    const messages = raceSpecificMessages[targetRace] || defaultMessages;
    const message = messages[Math.floor(Math.random() * messages.length)];

    return {
        number: horseNumber,
        name: horseName,
        message: message,
        race: targetRace,
        actualHorse: actualHorse
    };
}

function displayResult(result) {
    document.getElementById('loading').style.display = 'none';
    
    document.getElementById('horseNumber').textContent = `${result.number}番`;
    document.getElementById('horseName').textContent = result.name;
    document.getElementById('fortuneMessage').textContent = result.message;
    
    // 実際のレース馬を表示する部分
    const actualHorseContainer = document.getElementById('actualHorseContainer');
    actualHorseContainer.innerHTML = ''; // クリア
    
    if (result.actualHorse) {
        const actualHorseCard = document.createElement('div');
        actualHorseCard.className = 'actual-horse-card';
        
        actualHorseCard.innerHTML = `
            <div class="actual-horse-title">
                🏁 実際のレース出走馬
            </div>
            <div class="actual-horse-name">
                ${result.actualHorse}
            </div>
            <div class="actual-horse-message">
                選択されたレースからランダムで選ばれた実際の出走馬です
            </div>
        `;
        
        actualHorseContainer.appendChild(actualHorseCard);
    }
    
    document.getElementById('result').style.display = 'block';
    document.querySelector('.fortune-btn').disabled = false;
    
    // 結果までスクロール
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

function resetForm() {
    document.getElementById('fortuneForm').reset();
    document.getElementById('result').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    document.querySelector('.fortune-btn').disabled = false;
    document.getElementById('actualHorseContainer').innerHTML = '';
}