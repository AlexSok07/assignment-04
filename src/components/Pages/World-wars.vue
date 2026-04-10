<template>
   <main class="page-main">
      <div class="container">
        <h1>World Wars</h1>
        <p>
          Review the major global conflicts that reshaped borders, society, and
          politics in the twentieth century through industrialized battlefields,
          mass mobilization, and the rise of global alliances.
        </p>

        <section class="page-section">
          <h2>Major Conflicts</h2>
          <figure class="article-image">
            <img :src="worldwarImage" alt="20th century warfare imagery">
            <figcaption>Major battles and global conflict in the twentieth century.</figcaption>
          </figure>
          <ul>
            <li>World War I (1914–1918) was a global conflict primarily fought in Europe that introduced modern industrial warfare, characterized by trench systems, machine guns, and heavy artillery, which led to a prolonged stalemate and immense casualties, while underlying causes such as nationalism, militarism, alliances, and imperial competition contributed to its outbreak following the assassination of Archduke Franz Ferdinand.</li>
            <li>World War II (1939–1945) was a larger and more destructive global conflict that involved most of the world’s nations, marked by rapid military advances, total war, and significant technological developments such as tanks, aircraft, and atomic weapons, and was largely driven by aggressive expansionist policies of countries like Nazi Germany under Adolf Hitler, ultimately ending with the defeat of the Axis powers.</li>
            <li>The Allies were the coalition of nations that opposed the Axis powers during World War II, including major countries such as the United States, the United Kingdom, and the Soviet Union, who combined their military, economic, and industrial strength to fight on multiple fronts and ultimately secure victory through coordinated efforts and large-scale mobilization.</li>
            <li>The political aftermath of the World Wars reshaped the global order, leading to the collapse of empires, the redrawing of national borders, and the emergence of the United States and the Soviet Union as superpowers, which in turn led to the Cold War, while international organizations like the United Nations were established to promote peace and prevent future global conflicts.</li>
          </ul>
        </section>

        <section class="page-section">
          <h2>Remembering the 20th Century</h2>
          <p>
            Understand how remembrance, memorials, and lessons from these conflicts
            continue to shape our culture, diplomacy, and global memory.
          </p>
        </section>
      </div>
    </main>
</template>

<script setup>
import worldwarImage from '../../assets/worldwar.jpg'
</script>

<style scoped>
</style>
