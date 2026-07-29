export function renderHangarPage() {
    return `
<section class="hangar-page">

    <!-- Header -->

    <div class="hangar-header">

        <div class="hangar-title">

            <h1>🚀 Rocket Assembly Hangar</h1>

            <p>Design • Assemble • Analyze • Launch</p>

        </div>

        <button class="back-home">
            ← Home
        </button>

    </div>

    <!-- Main Layout -->

    <div class="hangar-layout">

        <!-- ================================= -->
        <!-- Parts Library -->
        <!-- ================================= -->

        <aside class="parts-panel">

            <h2>Parts Library</h2>

            <!-- Nose -->

            <div class="part-card">

                <h3>🔺 Nose Cone</h3>

                <span>Mass : 120 kg</span>

                <button data-part="nose">
                    Add
                </button>

            </div>

            <!-- Fuel Tank -->

            <div class="part-card">

                <h3>⬜ Fuel Tank</h3>

                <span>Mass : 350 kg</span>

                <button data-part="tank">
                    Add
                </button>

            </div>

            <!-- Engine -->

            <div class="part-card">

                <h3>⚙ Main Engine</h3>

                <span>Thrust : 950 kN</span>

                <button data-part="engine">
                    Add
                </button>

            </div>

            <!-- Fins -->

            <div class="part-card">

                <h3>🪶 Fins</h3>

                <span>Stability : +15%</span>

                <button data-part="fins">
                    Add
                </button>

            </div>

        </aside>

        <!-- ================================= -->
        <!-- Builder -->
        <!-- ================================= -->

        <section class="builder-panel">

            <div class="builder-header">

                Assembly Platform

            </div>

            <div class="builder-canvas">

                <div id="rocketBuilder">

                    <!-- Rocket SVG will appear here -->

                </div>

            </div>

        </section>

        <!-- ================================= -->
        <!-- Analysis -->
        <!-- ================================= -->

        <aside class="analysis-panel">

            <h2>Live Analysis</h2>

            <div class="stat">

                <span>Height</span>

                <strong id="heightValue">
                    0 m
                </strong>

            </div>

            <div class="stat">

                <span>Mass</span>

                <strong id="massValue">
                    0 kg
                </strong>

            </div>

            <div class="stat">

                <span>Fuel</span>

                <strong id="fuelValue">
                    0 L
                </strong>

            </div>

            <div class="stat">

                <span>Thrust</span>

                <strong id="thrustValue">
                    0 kN
                </strong>

            </div>

            <div class="stat">

                <span>TWR</span>

                <strong id="twrValue">
                    0
                </strong>

            </div>

            <div class="stat">

                <span>Budget</span>

                <strong id="budgetValue">
                    $0
                </strong>

            </div>

        </aside>

    </div>

    <!-- ================================= -->
    <!-- Bottom Toolbar -->
    <!-- ================================= -->

    <div class="hangar-toolbar">

        <button id="undoBtn">
            Undo
        </button>

        <button id="redoBtn">
            Redo
        </button>

        <button id="resetBtn">
            Reset
        </button>

        <button id="saveBtn">
            Save
        </button>

        <button class="launch-btn" id="launchBtn">
            🚀 Launch
        </button>

    </div>

</section>
`;
}
