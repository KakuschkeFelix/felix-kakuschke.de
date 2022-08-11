<template>
    <div class="nav-section">
        <a href="About Me">About Me</a>
        <a href="Abilities">Abilities</a>
        <a href="Experience">Experience</a>
        <a href="Contact">Contact</a>
    </div>
</template>
<style lang="scss" scoped>
    .nav-section {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        a {
            text-decoration: none;
            color: $brand;
            font-size: 2rem;
            padding: 1rem;
            padding-bottom: 0.5rem;
            font-family: 'Share Tech', sans-serif;
            transition: color 0.3s ease-out;
            display: inline-block;
            position: relative;
            width: fit-content;
            &:hover {
                color: $light;
            }
            &:after {
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: $brand;
                transform-origin: bottom;
                transition: transform 0.3s ease-in-out, color 0.3s ease-out;
            }
            &:hover:after {
                transform: scaleX(1);
                transform-origin: bottom;
                background-color: $light;
            }
        }
    }
</style>
