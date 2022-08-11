<template>
    <div class="abilities-section">
        <p>This includes:</p>
        <div class="icons">
            <div class="icon">
                <font-awesome-icon icon="fa-brands fa-github" />
            </div>
            <div class="scrollbar"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .icon {
        transition: all 0.3s ease-out;
        &.start {
            transform: translateX(50%);
            opacity: 0;
        }
        &.end {
            transform: translateX(-50%);
            opacity: 0;
        }
        &.reveal {
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>
// show 2-3, hide the rest, cycle start, reveal, end
